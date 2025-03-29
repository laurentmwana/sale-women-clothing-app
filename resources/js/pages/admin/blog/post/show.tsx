import AppLayout from '@/layouts/app-layout';
import { Post, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

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

type PostShowProps = { post: Post } & SharedData;

const PostShow = () => {
    const { post, auth } = usePage<PostShowProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="container-card">
                    <div className="flex items-center justify-between gap-5">
                        <h2 className="text-base font-semibold">{post.title}</h2>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default PostShow;
