import { google_analytics } from "@/data";

export default function Head() {
    return (
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>PowerMet</title>
            <link rel="icon" type="image/x-icon" href="./favicon.ico" />
            <meta
                name="google-site-verification"
                content="GUApCcOuicBYb0iiuh91zrOtBZdzAoTtteo5aSU4fo8"
            />
            <meta name="theme-color" content="#ffffff" />
            <link rel="canonical" href="https://generatoruz.com/" />
            <meta
                name="keywords"
                content="Power Met International are experts in importing and installing generator systems to keep your business running smoothly."
            />
            <meta property="og:site_name" content="PowerMet" />
            <meta
                property="og:title"
                content="PowerMet - POWERFUL INDUSTRIAL DIESEL GENERATORS"
            />
            <meta property="og:url" content="https://generatoruz.com/" />
            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content="Power Met International are experts in importing and installing generator systems to keep your business running smoothly."
            />
            <meta property="og:image" content="/public/Images/LogoBlack.png" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />
            <meta itemProp="name" content="PowerMet" />
            <meta itemProp="url" content="https://generatoruz.com/" />
            <meta
                itemProp="description"
                name="description"
                content="Power Met International are experts in importing and installing generator systems to keep your business running smoothly."
            />
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics}`}
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${google_analytics}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </head>
    );
}
