class CardsController < ApplicationController
    def index
        cards = Card.all
        render json: cards, include: [:name]
    end

    def show
        sighting = Sighting.find_by(id: params[:id])
        render json: 
    end
end
