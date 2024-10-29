import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function LocaleLayout({ children, params: { locale } }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}