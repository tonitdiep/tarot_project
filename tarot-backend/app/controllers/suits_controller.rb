class SuitsController < ApplicationController

    def index 
        suits = Suit.all
        # render json: SuitSerializer.new(suits, {include: [:cards]})

        render json: SuitSerializer.new(suits)
  
        # render json: suits

        # render json: suits.to_json(include: {cards: {only: [:name, :id, :meaning_upright, :meaning_reverse]}}, only: [:name, :id])
        
       
    end

    def show
        suit = Suit.find_by(params[:id])
        render json: suit
        # render json: suit.to_json(include: {cards: {only: [:name, :meaning_upright, :meaning_reverse]}}, only: [:name, :id])
    end
    
   private 
   
   
end
