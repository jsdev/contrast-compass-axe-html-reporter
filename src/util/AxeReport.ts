export interface Summary {
    description: string;
    id: string;
    wcag: string;
    help: string;
    impact: string;
    nodes: number;
    hasColorContrastIssue?: boolean;
}

export interface FixSummary {
    highlight: string;
    list?: string[]
}

interface NodeResult {
    html: string;
    targetNodes: string;
    fixSummaries: FixSummary[];
    index: number;
    relatedNodesAny: string[];
    hasColorContrastIssue?: boolean;
}

interface Details {
    wcag: string;
    tags: string[];
    id: string;
    impact: string;
    description: string;
    help: string;
    helpUrl: string;
    nodes: NodeResult[];
    hasColorContrastIssue?: boolean;
}

export interface AxeReport {
    violationsSummary: string;
    violationsSummaryTable?: Summary[];
    violationsDetails?: Details[];
    checksPassed?: Summary[];
    checksIncomplete?: Summary[];
    checksInapplicable?: Summary[];
}
