class AirlinesController < ApplicationController

        # GET 
      def index
        airlines = Airline.all
        render json: airlines , status: :found
      end
      
      # GET 
      def show
        airline = Airline.find(params[:id])
        if airline
        render json:airline , status: found
        else
          render json:{errors:airline.errors.full_messages} , status: :not_found
        end
        
      end

      # POST 
      def create
        airline = Airline.create(airline_params)

        if airline.save
          render json: airline
        else
          render json: {errors:"airline not  created"}, status: :unprocessable_entity
        end
      end

      # PATCH 
      def update
        airline = Airline.find()

        if airline.update(airline_params)
          render json:airline
        else
          render json: {errors:"airline not found"}, status: :not_found
        end
      end

      # DELETE 
      def destroy
        airline = Airline.find(params[:id])
        if airline
          airline.destroy
          head :no_content
        else
          render json: {errors:airline.errors}, status: :not_found
        end
      end

      private
      def airline_params
        params.permit(:name, :image_url)
      end

    
end
