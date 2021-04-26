class CardsController < ApplicationController
    def index
        cards = Card.all
        render json: CardSerializer.new(cards, include: [:suit])

    end

    def show
        card = Card.find_by(id: params[:id])
        render json: CardSerializer.new(card) 
    end

    def destroy
        card = Card.find(params[:id])
        card.destroy
        render json: {message: "COMPLETELY deleted #{card.name}!"}
    end

    private

    def card_params
        params.require(:card).permit(:name, :meaning_upright, :meaning_reverse, :suit_id)
    end

end
