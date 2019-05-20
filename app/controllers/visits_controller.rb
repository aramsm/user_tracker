class VisitsController < ApplicationController
  def index
    @visits = Visit.last(50)
  end
end
