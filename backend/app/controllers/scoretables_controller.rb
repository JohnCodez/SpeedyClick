class ScoretablesController < ApplicationController
    def index
        @scoretables = Scoretable.all
        render json: @scoretables
    end

    def show
        @scoretable = Scoretable.find(params[:id])
        render json: @scoretable
    end

    def new
        @scoretable = Scoretable.new
        render json: @scoretables
    end

    def create
        @scoretable = Scoretable.create(scoretable_params)
        render json: @scoretables
    end

    def update
        @scoretable = Scoretable.find(params[:id])
        @scoretable.update(scoretable_params)
        render json: @scoretable
    end

    private

    def scoretable_params
        params.require(:scoretable).permit(:score, :player_id, :player_name)
    end
end
