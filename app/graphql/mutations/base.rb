module Mutations
  class Base < GraphQL::Schema::Mutation
    def errors(object)
      object.errors.map do |attribute, message|
        {
          message: "#{object.class.human_attribute_name(attribute)} #{message}",
          attribute: attribute,
          type: "form"
        }
      end
    end

    def errors_alert(messages)
      messages.map do |message|
        {
          message: message,
          type: "alert"
        }
      end
    end
  end
end
