import * as core from "@actions/core";
import * as github from "@actions/github";
import fetch, { Headers, Response } from "node-fetch";
import { gt, valid } from "semver";
import type { JSONSchemaForNPMPackageJsonFiles } from "@schemastore/package";
import type { PullRequestEvent } from "@octokit/webhooks-types";
import { createReadStream } from "fs";

try {
  if (github.context.eventName !== "pull_request" && github.context.eventName !== "pull_request_target") {
    core.info("This action can only run on Pull Request events. Skipping.");
  } else {
    const payload = github.context.payload as PullRequestEvent;
    const baseOwner = github.context.repo.owner;
    const baseRepo = github.context.repo.repo;
    const baseSha = payload.pull_request.base.sha;

    const token = core.getInput("repo-token");
    const headers = new Headers();
    if (token !== "") {
      headers.append("Authorization", `token ${token}`);
    }

    core.info(`Fetching Old Version from ${baseOwner}/${baseRepo}/${baseSha}...`);
    const oldResponse = await fetch(
      `https://raw.githubusercontent.com/${baseOwner}/${baseRepo}/${baseSha}/package.json`,
      {
        headers,
      },
    );
    const oldJson = await oldResponse.json();
    const oldPackage = oldJson as JSONSchemaForNPMPackageJsonFiles;
    const oldVersion = oldPackage.version;

    core.info("Fetching New Version...");
    const newStream = createReadStream(`${process.env.GITHUB_WORKSPACE ?? "."}/package.json`);
    const newResponse = new Response(newStream);
    const newJson = await newResponse.json();
    const newPackage = newJson as JSONSchemaForNPMPackageJsonFiles;
    const newVersion = newPackage.version;

    core.info("Versions fetched. Comparing...");

    if (typeof oldVersion !== "string") {
      core.info("Old package.json version not set. Skipping.");
    } else if (typeof oldVersion === "string" && typeof newVersion === "string") {
      const isValidOldVersion = valid(oldVersion) !== null;
      const isValidNewVersion = valid(newVersion) !== null;
      if (!isValidOldVersion) {
        core.info("Old package.json version is not a valid Semver version. Skipping.");
      } else if (!isValidNewVersion) {
        core.setFailed("The new package.json version is not a valid Semver version.");
      } else if (gt(newVersion, oldVersion)) {
        core.info(`New package.json version ${newVersion} > ${oldVersion}`);
      } else {
        core.setFailed(`New package.json version ${newVersion} <= ${oldVersion}`);
      }
    } else {
      core.setFailed("New package.json version is not set when it's expected.");
    }
  }
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed("An unknown error occurred while running this action.");
  }
}
