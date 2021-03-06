export default interface UserObject {
    id?: number;
    username: string;
    password: string;
    email: string;
    karma: number;
    role: "member" | "admin" | "moderator";
    votedPostIds?: Array<number>;
    votedCommentIds?: Array<number>
}
