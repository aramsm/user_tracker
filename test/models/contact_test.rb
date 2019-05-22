require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  test "create a contact" do
    name = "test"
    email = "test@test.com"
    contact = Contact.new(name: name, email: email)

    assert contact.valid?
    assert contact.save
  end

  test "fails with invalid email format" do
    name = "test"
    email = "test@"
    contact = Contact.new(name: name, email: email)

    refute contact.valid?
    refute contact.save
  end

  test "fails to create a contact without params" do
    contact = Contact.new()

    refute contact.valid?
    refute contact.save
  end
end
