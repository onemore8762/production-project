import { type ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema'
import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsPageRecommendationsSchema
}
