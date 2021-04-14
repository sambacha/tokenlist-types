/** Declaration file generated by dts-gen */

export const VersionUpgrade: {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
    MAJOR: number;
    MINOR: number;
    NONE: number;
    PATCH: number;
};

export const schema: {
    $id: string;
    $schema: string;
    additionalProperties: boolean;
    definitions: {
        ExtensionIdentifier: {
            description: string;
            examples: string[];
            maxLength: number;
            minLength: number;
            pattern: string;
            type: string;
        };
        ExtensionValue: {
            anyOf: {
                examples: string[];
                maxLength: number;
                minLength: number;
                type: string;
            }[];
        };
        TagDefinition: {
            additionalProperties: boolean;
            description: string;
            examples: {
                description: string;
                name: string;
            }[];
            properties: {
                description: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    type: string;
                };
                name: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
        TagIdentifier: {
            description: string;
            examples: string[];
            maxLength: number;
            minLength: number;
            pattern: string;
            type: string;
        };
        TokenInfo: {
            additionalProperties: boolean;
            description: string;
            properties: {
                address: {
                    description: string;
                    examples: string[];
                    pattern: string;
                    type: string;
                };
                chainId: {
                    description: string;
                    examples: number[];
                    minimum: number;
                    type: string;
                };
                decimals: {
                    description: string;
                    examples: number[];
                    maximum: number;
                    minimum: number;
                    type: string;
                };
                extensions: {
                    additionalProperties: {
                        $ref: string;
                    };
                    description: string;
                    examples: {
                        color: string;
                        is_verified_by_me: boolean;
                    }[];
                    maxProperties: number;
                    propertyNames: {
                        $ref: string;
                    };
                    type: string;
                };
                logoURI: {
                    description: string;
                    examples: string[];
                    format: string;
                    type: string;
                };
                name: {
                    description: string;
                    examples: string[];
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    type: string;
                };
                symbol: {
                    description: string;
                    examples: string[];
                    maxLength: number;
                    minLength: number;
                    pattern: string;
                    type: string;
                };
                tags: {
                    description: string;
                    examples: string[];
                    items: {
                        $ref: string;
                    };
                    maxLength: number;
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
        Version: {
            additionalProperties: boolean;
            description: string;
            examples: {
                major: number;
                minor: number;
                patch: number;
            }[];
            properties: {
                major: {
                    description: string;
                    examples: number[];
                    minimum: number;
                    type: string;
                };
                minor: {
                    description: string;
                    examples: number[];
                    minimum: number;
                    type: string;
                };
                patch: {
                    description: string;
                    examples: number[];
                    minimum: number;
                    type: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    description: string;
    properties: {
        keywords: {
            description: string;
            items: {
                description: string;
                examples: string[];
                maxLength: number;
                minLength: number;
                pattern: string;
                type: string;
            };
            maxItems: number;
            type: string;
            uniqueItems: boolean;
        };
        logoURI: {
            description: string;
            examples: string[];
            format: string;
            type: string;
        };
        name: {
            description: string;
            examples: string[];
            maxLength: number;
            minLength: number;
            pattern: string;
            type: string;
        };
        tags: {
            additionalProperties: {
                $ref: string;
            };
            description: string;
            examples: {
                stablecoin: {
                    description: string;
                    name: string;
                };
            }[];
            maxProperties: number;
            propertyNames: {
                $ref: string;
            };
            type: string;
        };
        timestamp: {
            description: string;
            format: string;
            type: string;
        };
        tokens: {
            description: string;
            items: {
                $ref: string;
            };
            maxItems: number;
            minItems: number;
            type: string;
        };
        version: {
            $ref: string;
        };
    };
    required: string[];
    title: string;
    type: string;
};

export function diffTokenLists(base: any, update: any): any;

export function getVersionUpgrade(base: any, update: any): any;

export function isVersionUpdate(base: any, update: any): any;

export function minVersionBump(baseList: any, updatedList: any): any;

export function nextVersion(base: any, bump: any): any;

export function versionComparator(versionA: any, versionB: any): any;

