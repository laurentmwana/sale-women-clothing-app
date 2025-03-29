type PostMessageProps = { message: string };

export const PostMessage = ({ message }: PostMessageProps) => {
    return (
        <article
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{
                __html: message,
            }}
        ></article>
    );
};
