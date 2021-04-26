class SuitsController < ApplicationController

    def index 
        suits = Suit.all

        render json: SuitSerializer.new(suits, include: [:cards])
    end

    def show
   
        suit = Suit.find_by(id: params[:id])
        render json: SuitSerializer.new(suit, include: [:cards])
    end
    
    

   
   
end
