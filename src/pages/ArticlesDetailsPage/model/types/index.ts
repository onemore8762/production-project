import { type ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsPageRecommendationsSchema
}
