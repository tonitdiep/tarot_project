class SuitsController < ApplicationController

    def index 
        suits = Suit.all

        render json: SuitSerializer.new(suits, include: [:cards])

        # render json: suits.to_json(include: {cards: {only: [:id, :name, :meaning_upright, :meaning_reverse, :suit_id]}}, only: [:id, :name])
    
    end

    def show
   
        suit = Suit.find_by(id: params[:id])
        # options = {include: [:cards]}
        # render json: SuitSerializer.new(suit, options)
        render json: SuitSerializer.new(suit, include: [:cards])
    end
    
    
   private 
   
   
end
