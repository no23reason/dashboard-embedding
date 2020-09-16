import { IDashboard } from "@gooddata/sdk-backend-spi";
import { idRef } from "@gooddata/sdk-model";

import * as Ldm from "../../ldm/full";

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
                    header: {
                        title: "Row title",
                    },
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
                                    width: 6,
                                },
                            },
                        },
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
                                    width: 6,
                                },
                            },
                        },
                    ],
                },
                {
                    header: {
                        title: "Row title",
                    },
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
                                    width: 6,
                                },
                            },
                        },
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
                                    width: 6,
                                },
                            },
                        },
                    ],
                },
            ],
        },
    },
    filterContext: {
        created: "2020-09-16",
        description: "Some description",
        identifier: "example-dash",
        ref: idRef("example-dash"),
        title: "Example dashboard",
        filters: [
            {
                attributeFilter: {
                    attributeElements: [idRef("usa")],
                    displayForm: Ldm.LocationCountry.attribute.displayForm,
                    negativeSelection: false,
                },
            },
        ],
        uri: "/gdc/md/444",
    },
};
