class ReviewsController < ApplicationController
    # GET 
    def index
      reviews = Review.all
      render json: reviews , status: :ok
    end
    
    def show
      review = Review.find(params[:id])
      if review
      render json: review , status: :ok
      else
        render json: {errors:"review not found"}, status: :not_found
      end

    end

    def create
        review = Review.create(review_params)

        if review
          render json: review
        else
          render json: {errors:"could not create review"}, status: unprocessable_entity
        end
      end

      def update
        review = Review.find(params [:id])

        if review.update(review_params)
          render json:review
        else
          render json: {errors:"review not found"}, status: :not_found
        end
      end

      # DELETE 
      def destroy
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json:{errors:"could not create review"} , status: unprocessable_entity
        end
      end

      private

     
      def review_params
        params.permit(:title, :description, :score)
      end
end
