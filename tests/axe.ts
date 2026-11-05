import axe from "axe-core";

// ARIA and accessible name rules only: layout-dependent rules (contrast, target size…) are meaningless in happy-dom
const rules = [
    "aria-allowed-attr",
    "aria-allowed-role",
    "aria-command-name",
    "aria-hidden-focus",
    "aria-input-field-name",
    "aria-prohibited-attr",
    "aria-required-attr",
    "aria-required-children",
    "aria-required-parent",
    "aria-roles",
    "aria-valid-attr",
    "aria-valid-attr-value",
    "duplicate-id-aria",
    "label",
    "nested-interactive",
    "select-name",
];

/**
 * Run axe on an element attached to the document and return the violations as readable strings.
 */
export async function getAxeViolations(element: Element): Promise<string[]> {
    const results = await axe.run(element, { runOnly: { type: "rule", values: rules } });

    return results.violations.flatMap((violation) =>
        violation.nodes.map((node) => `${violation.id}: ${node.target.join(" ")} (${node.failureSummary})`),
    );
}
