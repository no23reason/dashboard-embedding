import { IDashboard } from "@gooddata/sdk-backend-spi";
import { idRef } from "@gooddata/sdk-model";

export const mockDashboard: IDashboard = {
    created: "2020-09-16",
    description: "Some description",
    identifier: "example-dash",
    ref: idRef("example-dash"),
    title: "Example dashboard",
    updated: "2020-09-16",
    uri: "/gdc/foo/123",
    layout: {
        fluidLayout: {
            rows: [
                {
                    columns: [
                        {
                            content: {
                                widget: {
                                    description: "Widget description",
                                    drills: [],
                                    identifier: "example-widget",
                                    ignoreDashboardFilters: [],
                                    ref: idRef("example-widget"),
                                    title: "Example widget",
                                    type: "insight",
                                    uri: "/gdc/foo/234",
                                    insight: {
                                        identifier: "example-insight",
                                        uri: "/gdc/foo/321",
                                        type: "insight",
                                    },
                                },
                            },
                            size: {
                                xl: {
                                    width: 12,
                                },
                            },
                        },
                    ],
                },
            ],
        },
    },
};
