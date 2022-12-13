// @refresh reload
import { Suspense } from 'solid-js'
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from 'solid-start'
import './root.css'
import { createI18nContext, I18nContext } from '@solid-primitives/i18n'
import { i18n } from '~/i18n/i18n'
import NavigatorBar from '~/components/Navigator-bar'

export default function Root() {
	const value = createI18nContext(i18n, 'es')

	return (
		<Html lang="en">
			<Head>
				<Title>Tutkli</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body class={'bg-gray-200 dark:bg-ebony-900'}>
				<Suspense>
					<ErrorBoundary>
						<I18nContext.Provider value={value}>
							<NavigatorBar />
							<Routes>
								<FileRoutes />
							</Routes>
						</I18nContext.Provider>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	)
}
