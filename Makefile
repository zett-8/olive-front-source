update-whole-branches:
	git push origin feature \
	git checkout dev \
	git merge feature \
	git push origin dev \
	git checkout master \
	git merge dev \
	git push origin master \
	git checkout feature
