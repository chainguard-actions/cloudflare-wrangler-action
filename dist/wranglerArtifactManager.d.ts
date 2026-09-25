import { z } from "zod";
export type OutputEntryPagesDeployment = z.infer<typeof OutputEntryPagesDeployment>;
declare const OutputEntryPagesDeployment: z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"pages-deploy-detailed">;
    pages_project: z.ZodNullable<z.ZodString>;
    deployment_id: z.ZodNullable<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    alias: z.ZodOptional<z.ZodString>;
    environment: z.ZodEnum<["production", "preview"]>;
    production_branch: z.ZodOptional<z.ZodString>;
    deployment_trigger: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodObject<{
            /** Commit hash of the deployment trigger metadata for the pages project */
            commit_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            commit_hash: string;
        }, {
            commit_hash: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        metadata: {
            commit_hash: string;
        };
    }, {
        metadata: {
            commit_hash: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "pages-deploy-detailed";
    environment: "preview" | "production";
    version: 1;
    pages_project: string | null;
    deployment_id: string | null;
    url?: string | undefined;
    alias?: string | undefined;
    production_branch?: string | undefined;
    deployment_trigger?: {
        metadata: {
            commit_hash: string;
        };
    } | undefined;
}, {
    type: "pages-deploy-detailed";
    environment: "preview" | "production";
    version: 1;
    pages_project: string | null;
    deployment_id: string | null;
    url?: string | undefined;
    alias?: string | undefined;
    production_branch?: string | undefined;
    deployment_trigger?: {
        metadata: {
            commit_hash: string;
        };
    } | undefined;
}>;
export type OutputEntryDeployment = z.infer<typeof OutputEntryDeployment>;
declare const OutputEntryDeployment: z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"deploy">;
    targets: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "deploy";
    version: 1;
    targets?: string[] | undefined;
}, {
    type: "deploy";
    version: 1;
    targets?: string[] | undefined;
}>;
export type OutputEntryVersionUpload = z.infer<typeof OutputEntryVersionUpload>;
declare const OutputEntryVersionUpload: z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"version-upload">;
    preview_url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "version-upload";
    version: 1;
    preview_url?: string | undefined;
}, {
    type: "version-upload";
    version: 1;
    preview_url?: string | undefined;
}>;
export type OutputEntryPreview = z.infer<typeof OutputEntryPreview>;
declare const OutputEntryPreview: z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"preview">;
    worker_name: z.ZodString;
    preview_id: z.ZodString;
    preview_name: z.ZodString;
    preview_slug: z.ZodString;
    preview_urls: z.ZodArray<z.ZodString, "many">;
    deployment_id: z.ZodString;
    deployment_urls: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "preview";
    version: 1;
    deployment_id: string;
    worker_name: string;
    preview_id: string;
    preview_name: string;
    preview_slug: string;
    preview_urls: string[];
    deployment_urls: string[];
}, {
    type: "preview";
    version: 1;
    deployment_id: string;
    worker_name: string;
    preview_id: string;
    preview_name: string;
    preview_slug: string;
    preview_urls: string[];
    deployment_urls: string[];
}>;
export type SupportedOutputEntry = z.infer<typeof SupportedOutputEntry>;
declare const SupportedOutputEntry: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"pages-deploy-detailed">;
    pages_project: z.ZodNullable<z.ZodString>;
    deployment_id: z.ZodNullable<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    alias: z.ZodOptional<z.ZodString>;
    environment: z.ZodEnum<["production", "preview"]>;
    production_branch: z.ZodOptional<z.ZodString>;
    deployment_trigger: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodObject<{
            /** Commit hash of the deployment trigger metadata for the pages project */
            commit_hash: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            commit_hash: string;
        }, {
            commit_hash: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        metadata: {
            commit_hash: string;
        };
    }, {
        metadata: {
            commit_hash: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "pages-deploy-detailed";
    environment: "preview" | "production";
    version: 1;
    pages_project: string | null;
    deployment_id: string | null;
    url?: string | undefined;
    alias?: string | undefined;
    production_branch?: string | undefined;
    deployment_trigger?: {
        metadata: {
            commit_hash: string;
        };
    } | undefined;
}, {
    type: "pages-deploy-detailed";
    environment: "preview" | "production";
    version: 1;
    pages_project: string | null;
    deployment_id: string | null;
    url?: string | undefined;
    alias?: string | undefined;
    production_branch?: string | undefined;
    deployment_trigger?: {
        metadata: {
            commit_hash: string;
        };
    } | undefined;
}>, z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"deploy">;
    targets: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "deploy";
    version: 1;
    targets?: string[] | undefined;
}, {
    type: "deploy";
    version: 1;
    targets?: string[] | undefined;
}>, z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"version-upload">;
    preview_url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "version-upload";
    version: 1;
    preview_url?: string | undefined;
}, {
    type: "version-upload";
    version: 1;
    preview_url?: string | undefined;
}>, z.ZodObject<{
    version: z.ZodLiteral<1>;
} & {
    type: z.ZodLiteral<"preview">;
    worker_name: z.ZodString;
    preview_id: z.ZodString;
    preview_name: z.ZodString;
    preview_slug: z.ZodString;
    preview_urls: z.ZodArray<z.ZodString, "many">;
    deployment_id: z.ZodString;
    deployment_urls: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "preview";
    version: 1;
    deployment_id: string;
    worker_name: string;
    preview_id: string;
    preview_name: string;
    preview_slug: string;
    preview_urls: string[];
    deployment_urls: string[];
}, {
    type: "preview";
    version: 1;
    deployment_id: string;
    worker_name: string;
    preview_id: string;
    preview_name: string;
    preview_slug: string;
    preview_urls: string[];
    deployment_urls: string[];
}>]>;
/**
 * Parses file names in a directory to find wrangler artifact files
 *
 * @param artifactDirectory
 * @returns All artifact files from the directory
 */
export declare function getWranglerArtifacts(artifactDirectory: string): Promise<string[]>;
/**
 * Searches for a supported wrangler OutputEntry
 *
 * @param artifactDirectory
 * @returns The first SupportedOutputEntry found within a wrangler artifact directory
 */
export declare function getOutputEntry(artifactDirectory: string): Promise<SupportedOutputEntry | null>;
export {};
