class CardsController < ApplicationController
    def index
        cards = Card.all
        render json: cards
        # render json: CardSerializer.new(cards, {only: {[:name, :meaning_upright]}}, include: [:suit])
        # render json: cards.to_json(only: [:name, :meaning_upright, :meaning_reverse], include: [:suit])
        # render json: cards.to_json(only: [:id, :name, :meaning_upright, :meaning_reverse])
    end

    def show
        card = Card.find_by(id: params[:id])
        render json: card 
    end
end
