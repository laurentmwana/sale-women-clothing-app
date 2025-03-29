import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Moment } from '@/shared/moment';
import type { ReplyComment } from '@/types';
import { User2 } from 'lucide-react';
import { CommentMessage } from './comment-message';
import { ReplyCommentOptionAdmin } from './comment-option';

type ReplyCommentsProps = {
    replies: ReplyComment[];
};

export const ReplyComments = ({ replies }: ReplyCommentsProps) => {
    return (
        <div className="space-y-6">
            {replies.map((reply) => (
                <div key={reply.id} className="shadow-sm transition-all hover:shadow-md">
                    <div className="bg-card rounded-lg border p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                        <div className="flex items-start gap-4">
                            {/* Avatar section */}
                            <Avatar className="border-background ring-primary/10 h-10 w-10 border-2 ring-2">
                                <AvatarFallback className="bg-primary/10 text-primary">
                                    <User2 size={18} />
                                </AvatarFallback>
                            </Avatar>

                            {/* Comment content */}
                            <div className="flex-1 space-y-2.5">
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    {/* User info and timestamp */}
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-card-foreground font-medium">{reply.username}</h3>
                                        <Moment date={reply.created_at} className="text-muted-foreground flex items-center gap-1.5 text-xs" />
                                    </div>

                                    {/* Admin options */}

                                    <ReplyCommentOptionAdmin reply={reply} />
                                </div>

                                {/* Comment message */}
                                <div className="bg-muted/30 rounded-md p-3">
                                    <CommentMessage message={reply.message} state={reply.lock} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
