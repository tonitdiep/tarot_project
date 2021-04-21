class CardsController < ApplicationController
    def index
        cards = Card.all
        render json: CardSerializer.new(cards, include: [:suit])

    end

    def show
        card = Card.find_by(id: params[:id])
        render json: CardSerializer.new(card) 
    end


end
