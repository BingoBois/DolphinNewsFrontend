export default interface VoteObject {
    id?: number;
    vote_type: "post" | "comment";
    amount: number;
    fk_user: number;
    fk_post?: number;
    fk_comment?: number;
}