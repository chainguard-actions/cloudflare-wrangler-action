import { getOctokit } from "@actions/github";
import { OutputEntryPagesDeployment, OutputEntryPreview } from "../wranglerArtifactManager";
import { WranglerActionConfig } from "../wranglerAction";
type Octokit = ReturnType<typeof getOctokit>;
export declare function createGitHubDeployment({ config, octokit, productionBranch, environment, deploymentId, projectName, deploymentUrl, }: {
    config: WranglerActionConfig;
    octokit: Octokit;
    productionBranch: string;
    environment: string;
    deploymentId: string | null;
    projectName: string;
    deploymentUrl?: string;
}): Promise<void>;
export declare function createJobSummary({ commitHash, deploymentUrl, aliasUrl, }: {
    commitHash: string;
    deploymentUrl?: string;
    aliasUrl?: string;
}): Promise<void>;
/**
 * Create github deployment, if GITHUB_TOKEN is present in config
 */
export declare function createGitHubDeploymentAndJobSummary(config: WranglerActionConfig, pagesArtifactFields: OutputEntryPagesDeployment): Promise<void>;
export declare function createPreviewJobSummary({ previewName, previewUrl, deploymentUrl, workerName, }: {
    previewName: string;
    previewUrl?: string;
    deploymentUrl?: string;
    workerName: string;
}): Promise<void>;
/**
 * Create a non-production GitHub deployment and job summary for a Workers Preview.
 */
export declare function createPreviewGitHubDeploymentAndJobSummary(config: WranglerActionConfig, previewFields: OutputEntryPreview): Promise<void>;
export {};
