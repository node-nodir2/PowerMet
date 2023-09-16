import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export default function Head({ language }) {
    return (
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>POWERMET</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/apple-icon.png" sizes="any" />
            <meta
                name="google-site-verification"
                content="GUApCcOuicBYb0iiuh91zrOtBZdzAoTtteo5aSU4fo8"
            />
            <meta name="theme-color" content="#ffffff" />
            <link rel="canonical" href="https://generatoruz.com/ru" />
            <meta
                name="keywords"
                content="PowerMet International are experts in importing and installing generator systems to keep your business running smoothly. We import and supply more than 8 leading manufacturing brands, including Shanghai, Volvo, Weichai, Baudouin, Ella, Perkins."
            />
            <meta property="og:site_name" content="POWERMET" />
            <meta property="og:title" content={`POWERMET`} />
            <meta property="og:url" content="https://generatoruz.com/ru" />
            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content="PowerMet International are experts in importing and installing generator systems to keep your business running smoothly. We import and supply more than 8 leading manufacturing brands, including Shanghai, Volvo, Weichai, Baudouin, Ella, Perkins."
            />
            <meta property="og:image" content="/public/Images/LogoBlack.png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta itemProp="name" content="Generator" />
            <meta itemProp="url" content="https://generatoruz.com/ru" />
            <meta
                itemProp="description"
                name="description"
                content="PowerMet International are experts in importing and installing generator systems to keep your business running smoothly."
            />
            <GoogleAnalytics measurementId="G-BNP9RQVHMX" />
            <meta
                name="google-site-verification"
                content="UKmqey8Eiy9USFTyTAzQPBXcFD8M-_yk9b_9uPgvN_I"
            />
        </head>
    );
}
