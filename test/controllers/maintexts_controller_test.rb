require 'test_helper'

class MaintextsControllerTest < ActionController::TestCase
  setup do
    @maintext = maintexts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:maintexts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create maintext" do
    assert_difference('Maintext.count') do
      post :create, maintext: {  }
    end

    assert_redirected_to maintext_path(assigns(:maintext))
  end

  test "should show maintext" do
    get :show, id: @maintext
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @maintext
    assert_response :success
  end

  test "should update maintext" do
    patch :update, id: @maintext, maintext: {  }
    assert_redirected_to maintext_path(assigns(:maintext))
  end

  test "should destroy maintext" do
    assert_difference('Maintext.count', -1) do
      delete :destroy, id: @maintext
    end

    assert_redirected_to maintexts_path
  end
end
