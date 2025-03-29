import AppLayout from '@/layouts/app-layout';
import { FormatterObject, Post, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { PostForm } from './post-form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Articles',
        href: route('#post.index'),
    },
    {
        title: 'En savoir plus sur un article',
        href: '',
    },
];

type PostEditProps = { post: Post; categories: FormatterObject[] };

const PostEdit = () => {
    const { post, categories } = usePage<PostEditProps>().props;

    const title = `Editer l'article #${post.id}`;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-base font-semibold">{title}</h2>
                        <PostForm
                            categoriesItems={categories}
                            title={post.title}
                            content={post.content}
                            categoriesId={post.categories.map((c) => c.id)}
                            id={post.id}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default PostEdit;
