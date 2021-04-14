class CardsController < ApplicationController
    def index
        cards = Card.all
        # render json: cards
        render json: CardSerializer.new(cards)
        # render json: CardSerializer.new(cards, {only: {[:name, :meaning_upright]}}, include: [:suit])

    end

    def show
        card = Card.find_by(id: params[:id])
        render json: CardSerializer.new(card) 
    end
end
