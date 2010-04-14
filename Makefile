#
# DIRECTORIES
#
ROOT_DIR := $(PWD)
BUILD_TOOL_DIR := $(ROOT_DIR)/build
BUILD_TOOL := $(BUILD_TOOL_DIR)/build.sh
SRC_DIR := $(ROOT_DIR)/src
DIST_DIR := $(ROOT_DIR)/src-build
BUILD_PROFILE_DIR := $(SRC_DIR)/build

#
# BUILD TARGETS
#
.PHONY: clean

dojo-build:
	$(BUILD_TOOL) $(BUILD_PROFILE_DIR)/dojo.build.js

clean:
	rm -rf $(DIST_DIR)