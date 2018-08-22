module Mutations
  class Base < GraphQL::Schema::Mutation
    def errors(object)
      object.errors.map do |attribute, message|
        {
          message: "#{object.class.human_attribute_name(attribute)} #{message}",
          attribute: attribute
        }
      end
    end
  end
end
