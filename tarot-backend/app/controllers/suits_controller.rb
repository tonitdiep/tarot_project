class SuitsController < ApplicationController

    def index 
        suits = Suit.all
        # render json: SuitSerializer.new(suits, {include: [:cards]})

        render json: SuitSerializer.new(suits)
       
    end

    def show
   
        suit = Suit.find_by(id: params[:id])
        render json: SuitSerializer.new(suit)
        
    end
    
   private 
   
   
end
