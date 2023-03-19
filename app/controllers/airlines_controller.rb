class AirlinesController < ApplicationController

        # GET 
      def index
        airlines = Airline.all
        render json: airlines , status: 200
      end
      
      # GET 
      def show
        
      end

      # POST 
      def create
        airline = Airline.create!(airline_params)

        if airline.save
          render json: airline
        else
          render json: {errors:"airline not  created"}, status: unprocessable_entity
        end
      end

      # PATCH 
      def update
        airline = Airline.find_by(slug: params[:slug])

        if airline.update(airline_params)
          render json:airline
        else
          render json: {errors:"airline not found"}, status:not_found
        end
      end

      # DELETE 
      def destroy
        if airline.destroy
          head :no_content
        else
          render json: {errors:"airline cannot be found"}, status: not_found
        end
      end

      private
      def airline_params
        params.require(:airline).permit(:name, :image_url)
      end

    
end
