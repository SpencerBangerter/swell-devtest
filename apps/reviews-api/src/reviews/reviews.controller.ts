import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsCountResponse, ReviewsResponse } from './reviews.types';

@Controller('reviews')
export class ReviewsController {
	constructor(private reviewsService: ReviewsService) {}

	@Get('/all')
	async getReviews(): Promise<ReviewsResponse> {
		//Ideally I would like to set up some kind of server side pagination
		//and limit the number of reviews returned
		//but for the sake of this exercise I will just return all reviews

		const reviews = await this.reviewsService.getAllReviews();
		reviews.sort((a, b) => {
			return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime();
		});
		return { reviews };
	}

	@Get('/count')
	async getReviewsCount(): Promise<ReviewsCountResponse> {
		const reviewsCount = await this.reviewsService.getReviewsCount();
		return { reviewsCount };
	}
}
