import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '@consts'
import type { APIContext } from 'astro'

/**
 * This renders an RSS feed based on blog posts from the Astro site.
 * @param context APIContext passed in by Astro.
 * @returns An RSS XML rendering Promise.
 */
export async function get(context: APIContext): Promise<{ body: string }> {
    const posts = await getCollection('blog')
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site?.toString() || '',
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.slug}/`,
        })),
    })
}
