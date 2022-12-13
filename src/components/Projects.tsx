import { useI18n } from '@solid-primitives/i18n'
import { For } from 'solid-js'
import { projects } from '~/const/projects.conts'
import { A } from 'solid-start'

export default function Projects() {
	const [t] = useI18n()
	return (
		<>
			<section class={'text-ebony-900 dark:text-gray-200 flex flex-col gap-4'}>
				<h2 class={'font-semibold text-xl sm:text-2xl'}>{t('projects')}</h2>

				<div class={'flex flex-col md:flex-row md:wrap gap-5'}>
					<For each={projects}>
						{(project) =>
							<A href={project.url} target={'_blank'} class={'rounded-lg flex flex-col duration-300 hover:scale-105'}>
								<img src={project.imageSrc} alt={`${project.name} front`} class={'rounded-t-lg'} />
								<div class={'p-4 text-gray-600 dark:text-gray-200 bg-gray-300 dark:bg-slate-900 font-semibold rounded-b-lg'}>
									{project.name}
								</div>
							</A>
						}
					</For>
				</div>

			</section>
		</>
	)
}
