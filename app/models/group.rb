class Group < ActiveRecord::Base
  has_many :foods
  has_many :subgroups
  validates :name, presence: true
end
