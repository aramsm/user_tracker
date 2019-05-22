class VisitsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @visits = Visit.last(50)
  end

  def create
    @visit = Visit.new(guid: params[:guid], url: params[:url])

    @visit.save
  end

  private

  def visit_params
    params.require(:visit).permit(:guid, :url)
  end
end
