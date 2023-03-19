class ReviewsController < ApplicationController
    def create
        review = Review.create!(review_params)

        if review.save
          render json: review
        else
          render json: {errors:"could not create review"}, status: unprocessable_entity
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
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end
end
