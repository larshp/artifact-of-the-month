sap.ui.define([], function () {
    "use strict";
    return {
        displayItem: function (type, currentFilter) {
            if (currentFilter === "all") {
                return true;
            }
            return type === currentFilter;
        },

        formatRank: function (rank) {
            return +rank + 1;
        },

        formatIndicator: function (rank, pastRank) {
            if (rank < pastRank || isNaN(pastRank)) {
                return sap.m.DeviationIndicator.Up;
            }
            if (rank > pastRank) {
                return sap.m.DeviationIndicator.Down;
            }
            return sap.m.DeviationIndicator.None;
        },

        formatPastRankTooltip: function (pastRank) {
            const resourceBundle = this.getView()
                .getModel("i18n")
                .getResourceBundle();
            if (isNaN(pastRank)) {
                return resourceBundle.getText("noPrevListing");
            }
            return resourceBundle.getText("prevListing", [+pastRank + 1]);
        },

        isPresent: function (value) {
            return !!value;
        },

        containsNpmPackages: function (allItem) {
            return allItem && allItem.some(function (item) {
                return item.type === "npm-package";
            });
        },

        containsDockerImages: function (allItem) {
            return allItem && allItem.some(function (item) {
                return item.type === "docker-image";
            });
        },

        containsPypiPackages: function (allItem) {
            return allItem && allItem.some(function (item) {
                return item.type === "pypi-package";
            });
        },

        containsCodeRepositories: function (allItem) {
            return allItem && allItem.some(function (item) {
                return item.type === "code-repository";
            });
        },
    };
});