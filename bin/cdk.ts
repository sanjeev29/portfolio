#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { PortfolioStack } from "../lib/portfolio-stack.ts";

const app = new cdk.App();
const config = app.node.tryGetContext("config");

new PortfolioStack(app, "PortfolioStack", {
  env: { ...config },
});
