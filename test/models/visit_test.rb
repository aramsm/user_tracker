require 'test_helper'

class VisitTest < ActiveSupport::TestCase
  test "create a visit" do
    guid = "54820484"
    url = "/"
    visit = Visit.new(guid: guid, url: url)

    assert visit.valid?
    assert visit.save
  end

  teste "fails to create a visit with invalid params" do
    visit = Visit.new()

    refute visit.valid?
    refute visit.save
  end
end
