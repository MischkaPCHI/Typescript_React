export interface FeedbackProps {
  onLikeClick: () => void;
  onDislikeClick: () => void;
  onResetClick: () => void;
  likeValue: number;
  dislikeValue: number;
}
