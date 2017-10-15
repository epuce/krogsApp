class Subgroup < ActiveRecord::Base
  has_one :group
  validates :subgroup, presence: true
end
