export const urls = {
    detection: [
        {
            pattern: /.*.(nabxnonprod|nabxprod)/,
            description: "HIP proxy",
            examples: [
                {
                    url: "profiles-latest.dev-x-nabx.nabxnonprod",
                    description: "",
                },
            ],
        },
        {
            pattern: /.*.nabx.(extnp|ext).national.com.au/,
            description: "HIP mapped ALB",
            examples: [
                {
                    url: "profiles-latest.dev-x-nabx.nabx.extnp.national.com.au",
                    description: "",
                },
            ],
        },
        {
            pattern: /.*(.ewcs.extnp.nab.com.au|.nab.com.au)/,
            description: "Akamai",
            examples: [
                {
                    url: "dev-x.ewcs.extnp.nab.com.au",
                    description: "",
                },
            ],
        },
    ],
    refs: [],
};
